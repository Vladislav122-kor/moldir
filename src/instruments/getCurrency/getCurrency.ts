export async function getCurrency() {
    const link = 'https://www.nbrb.by/api/exrates/rates/431';
    try {
        const res = await fetch(link);
        if (!res.ok) {
            throw new Error();
        }
        const data = await res.json();
        return data.Cur_OfficialRate;
    } catch {
        throw new Error();
    }
}