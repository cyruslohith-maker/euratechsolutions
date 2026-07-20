-- Run this in your Supabase SQL Editor (https://app.supabase.com → SQL Editor)

create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  business_name text not null,
  business_email text not null,
  phone_number text not null,
  country text not null,
  state text not null,
  created_at timestamptz default now() not null
);

-- Enable Row Level Security
alter table leads enable row level security;

-- Allow anonymous inserts (for lead capture form)
create policy "Allow public inserts" on leads
  for insert to anon with check (true);

-- Only authenticated users can read leads (your team)
create policy "Authenticated users can read leads" on leads
  for select to authenticated using (true);
