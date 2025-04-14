export function getLocalStorageValue(name: string) {
  return localStorage.getItem(name) || undefined;
}

export function setLocalStorageValue(name: string, value: string) {
  localStorage.setItem(name, value);
}

export function getPageIdFromUrl() {
   const pathParts = window.location.pathname.split('/');
   const pageId = pathParts[2]; // index 0 = '', 1 = 'test', 2 = pageId
   return pageId;
 }
