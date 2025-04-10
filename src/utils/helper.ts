export function getLocalStorageValue(name: string) {
  return localStorage.getItem(name) || undefined;
}

export function setLocalStorageValue(name: string, value: string) {
  localStorage.setItem(name, value);
}
