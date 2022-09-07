import http from "./httpService";

export default function updateContact(data,id) {
  return http.put(`/contacts/${id}`,data);
}
