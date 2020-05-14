export const useBeforeLeave = (onBefore) => {
  if (onBefore && typeof onBefore !== "function") return;
  useEffect(() => {
    const handle = () => {
      onBefore();
    };
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
