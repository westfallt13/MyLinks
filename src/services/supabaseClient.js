const SUPABASE_LEADS = import.meta.env.VITE_SUPABASE_LEADS;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const submitContactForm = async (formData) => {
    const response = await fetch(SUPABASE_LEADS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(formData)
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Failed to submit form: ${error}`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : {};
};