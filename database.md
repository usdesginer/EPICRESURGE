
# EpicResurge Forensic Database Schema

This document outlines the database structure and Row Level Security (RLS) policies required for the EpicResurge Digital Asset Recovery platform.

## SQL Setup (Run this in Supabase SQL Editor)

To ensure the application functions correctly, execute the following SQL in your Supabase project:

```sql
-- 1. Create the cases table (For intake)
CREATE TABLE IF NOT EXISTS cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id text,
  case_type text,
  user_name text,
  user_email text,
  user_phone text,
  user_country text,
  risk_level text,
  evidence_integrity text,
  status text DEFAULT 'Review Pending',
  description text,
  result_data jsonb,
  form_values jsonb,
  evidence_files jsonb DEFAULT '[]', -- Store array of {name, path, url}
  is_blocked boolean DEFAULT false,
  has_access boolean DEFAULT true,
  best_contact_time text,
  preferred_method text,
  created_at timestamptz DEFAULT now()
);

-- 2. Create the success_stories table (Case Insights)
CREATE TABLE IF NOT EXISTS success_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id text,
  case_type text, -- Division
  amount text,
  status text DEFAULT 'Resolved',
  challenge text, -- Technical Challenge
  focus text,     -- Investigative Focus
  outcome text,   -- Technical Outcome
  narrative text, -- General Summary
  icon_name text DEFAULT 'TrendingUp',
  created_at timestamptz DEFAULT now()
);

-- 3. Enable Row Level Security
ALTER TABLE cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow Public Submissions (Insert)
DROP POLICY IF EXISTS "Allow public insert" ON cases;
CREATE POLICY "Allow public insert" ON cases 
FOR INSERT WITH CHECK (true);

-- 5. Policy: Restrict Read Access (Select)
DROP POLICY IF EXISTS "Allow authenticated select" ON cases;
CREATE POLICY "Allow authenticated select" ON cases 
FOR SELECT TO authenticated USING (true);

-- 6. Policy: Restrict Updates (Update)
DROP POLICY IF EXISTS "Allow authenticated update" ON cases;
CREATE POLICY "Allow authenticated update" ON cases 
FOR UPDATE TO authenticated USING (true);

-- 7. Policy: Restrict Deletion (Delete)
DROP POLICY IF EXISTS "Allow authenticated delete" ON cases;
CREATE POLICY "Allow authenticated delete" ON cases 
FOR DELETE TO authenticated USING (true);

-- 8. Policy: Public Read for Success Stories
DROP POLICY IF EXISTS "Allow public select stories" ON success_stories;
CREATE POLICY "Allow public select stories" ON success_stories 
FOR SELECT USING (true);

-- 9. Policy: Admin All for Success Stories
DROP POLICY IF EXISTS "Allow authenticated all stories" ON success_stories;
CREATE POLICY "Allow authenticated all stories" ON success_stories 
FOR ALL TO authenticated USING (true);
```

---

## Storage Buckets & Storage RLS Policies

When uploading files (such as `logo.png` or team photos) with `upsert: true`, Supabase queries `storage.objects` to verify whether the object exists (`SELECT`), and then executes an `INSERT` or `UPDATE`. If Row Level Security (RLS) is enabled without corresponding policies on `storage.objects`, PostgreSQL returns:
> `ERROR: 42501: new row violates row-level security policy for table "objects"`

Execute the following SQL commands in your **Supabase Project > SQL Editor** to automatically configure buckets and RLS policies:

```sql
-- ==============================================================================
-- 10. STORAGE BUCKET INITIALIZATION
-- ==============================================================================

-- Ensure 'assets' bucket exists and is public
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'assets', 
  'assets', 
  true, 
  10485760, -- 10MB limit
  ARRAY['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE SET 
  public = true,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- Ensure 'evidence' bucket exists and is private (for victim submissions)
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES (
  'evidence', 
  'evidence', 
  false, 
  52428800 -- 50MB limit
)
ON CONFLICT (id) DO UPDATE SET 
  public = false,
  file_size_limit = EXCLUDED.file_size_limit;


-- ==============================================================================
-- 11. STORAGE RLS POLICIES FOR 'assets' (Branding & Team Imagery)
-- ==============================================================================

-- A. Public Read: Anyone can view/download public assets (logo.png, hero backgrounds, avatars)
DROP POLICY IF EXISTS "Public Read Assets" ON storage.objects;
CREATE POLICY "Public Read Assets"
ON storage.objects FOR SELECT
USING (bucket_id = 'assets');

-- B. Authenticated Insert: Authenticated admins can upload new assets
DROP POLICY IF EXISTS "Authenticated Insert Assets" ON storage.objects;
CREATE POLICY "Authenticated Insert Assets"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'assets');

-- C. Authenticated Update: Authenticated admins can overwrite existing assets (Required for upsert: true)
DROP POLICY IF EXISTS "Authenticated Update Assets" ON storage.objects;
CREATE POLICY "Authenticated Update Assets"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'assets')
WITH CHECK (bucket_id = 'assets');

-- D. Authenticated Delete: Authenticated admins can delete assets
DROP POLICY IF EXISTS "Authenticated Delete Assets" ON storage.objects;
CREATE POLICY "Authenticated Delete Assets"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'assets');


-- ==============================================================================
-- 12. STORAGE RLS POLICIES FOR 'evidence' (Victim Case Evidence)
-- ==============================================================================

-- A. Public/Victim Insert: Anyone submitting an intake form can upload evidence files
DROP POLICY IF EXISTS "Public Evidence Upload" ON storage.objects;
CREATE POLICY "Public Evidence Upload"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'evidence');

-- B. Authenticated Read: Only authenticated investigators can view/download victim evidence
DROP POLICY IF EXISTS "Authenticated Evidence Select" ON storage.objects;
CREATE POLICY "Authenticated Evidence Select"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'evidence');

-- C. Authenticated Delete: Only authenticated investigators can purge evidence
DROP POLICY IF EXISTS "Authenticated Evidence Delete" ON storage.objects;
CREATE POLICY "Authenticated Evidence Delete"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'evidence');


-- ==============================================================================
-- 13. (OPTIONAL) UNRESTRICTED DEVELOPMENT SYNC POLICY
-- If you need to test uploads without logging in as an authenticated admin:
-- ==============================================================================
-- DROP POLICY IF EXISTS "Dev Public Upload Assets" ON storage.objects;
-- CREATE POLICY "Dev Public Upload Assets"
-- ON storage.objects FOR INSERT
-- TO public
-- WITH CHECK (bucket_id = 'assets');
--
-- DROP POLICY IF EXISTS "Dev Public Update Assets" ON storage.objects;
-- CREATE POLICY "Dev Public Update Assets"
-- ON storage.objects FOR UPDATE
-- TO public
-- USING (bucket_id = 'assets')
-- WITH CHECK (bucket_id = 'assets');
```

## Storage Buckets Summary

### `assets` (Public)
- **Purpose**: Stores public brand assets including `logo.png`, `hero-bg.png`, and team member avatars (`team-1.png`, etc.).
- **Permissions**: Publicly readable across the web. Upload, update (`upsert`), and delete are restricted to authenticated administrators.

### `evidence` (Private)
- **Purpose**: Stores victim-submitted documents (transaction hashes, chat logs, bank statements).
- **Permissions**: Securely isolated. Allows public `INSERT` during case intake, but strictly restricts `SELECT` (reading and downloading) to authenticated forensic personnel.
