/*
  # Create rounds and workouts tables

  1. New Tables
    - `rounds`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `course` (text)
      - `score` (text)
      - `fairways_hit` (text)
      - `gir` (text)
      - `putts` (integer)
      - `scramble` (text)
      - `competition` (boolean)
      - `date` (timestamptz)
      - `created_at` (timestamptz)
    - `workouts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `day` (text)
      - `exercises` (jsonb)
      - `created_at` (timestamptz)
    - `split_days`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `name` (text)
      - `sort_order` (integer)
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

CREATE TABLE IF NOT EXISTS rounds (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  course text DEFAULT '',
  score text DEFAULT '',
  fairways_hit text DEFAULT '',
  gir text DEFAULT '',
  putts integer DEFAULT 0,
  scramble text DEFAULT '',
  competition boolean DEFAULT false,
  date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rounds ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own rounds"
  ON rounds FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own rounds"
  ON rounds FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own rounds"
  ON rounds FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own rounds"
  ON rounds FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

CREATE TABLE IF NOT EXISTS workouts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  day text DEFAULT '',
  exercises jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE workouts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own workouts"
  ON workouts FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own workouts"
  ON workouts FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own workouts"
  ON workouts FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own workouts"
  ON workouts FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

CREATE TABLE IF NOT EXISTS split_days (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  name text DEFAULT '',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE split_days ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own split days"
  ON split_days FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own split days"
  ON split_days FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own split days"
  ON split_days FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete own split days"
  ON split_days FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());
