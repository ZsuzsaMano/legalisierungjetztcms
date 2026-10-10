export const usePageContent = async (path) => {
  const { locale } = useI18n();
  const { data } = await useAsyncData(`page-content:${path}`, () =>
    queryContent(path).findOne(),
  );

  const currentContent = computed(
    () => data.value?.[locale.value] || data.value?.de || data.value || {},
  );

  return { data, currentContent };
};
