export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
    return formattedDate;
};

export const renderString = (value?: string | null) => {
    if (value) {
        return value;
    } else {
        return '-';
    }
};
