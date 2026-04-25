-- SQL Schema for TreasurePoint Tutors
-- Run this in your Supabase SQL Editor

-- 1. Profiles Table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  email TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Questions Table
CREATE TABLE questions (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subject TEXT NOT NULL, -- e.g., 'Financial Reporting', 'Audit'
  diet_year TEXT NOT NULL, -- e.g., 'Nov 2023'
  difficulty TEXT CHECK (difficulty IN ('Basic', 'Intermediate', 'Advanced')),
  solution_content TEXT, -- Markdown or HTML content
  is_premium BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Forum Posts Table
CREATE TABLE forum_posts (
  id BIGSERIAL PRIMARY KEY,
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT FALSE,
  replies_count INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public profiles are viewable by everyone." ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile." ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Questions are viewable by authenticated users." ON questions FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Forum posts are viewable by authenticated users." ON forum_posts FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users can create forum posts." ON forum_posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
