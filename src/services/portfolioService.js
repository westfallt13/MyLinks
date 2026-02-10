const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function getPortfolioItems() {
    try {
        const response = await fetch(`${SUPABASE_URL}`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch portfolio items');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching portfolio items:', error);
        return [];
    }
}