/* ---------------------- SOMETING ELSE --------------------------- */
export const urlParams = ({
    params,
    pathname,
    key,
    value,
}: {
    params: string;
    pathname: string;
    key: string;
    value: string | null;
}) => {
    const newUrl = `${pathname}?${key}=${value}`;
    return newUrl;
};
/* ---------------------------------------------------------------- */
