const currencyFormatter = (value) =>
    'Rs. ' + Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(value);

export default currencyFormatter