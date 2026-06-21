# Initial Data Model

Sprint 1-4 auth foundation data model.

## profiles

Fields:

- id: user identifier
- email: user email
- full_name: display name
- target_role: target career role
- career_stage: junior, mid, senior, career-switcher
- created_at
- updated_at

## career_profiles

Fields:

- id: career profile identifier
- user_id: owner profile identifier
- headline
- summary
- skills
- preferred_companies
- preferred_locations
- created_at
- updated_at

SQL migration will be added after the Supabase project is connected and verified locally.
