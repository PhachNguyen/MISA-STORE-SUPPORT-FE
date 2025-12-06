// Giúp  tạo API cho từng module cực nhanh

import api from '@/apis/config/APIConfig.js'

export default class BaseAPI {
  /**
   * Truyền controller khi khởi tạo class con
   * vd: this.controller = "affiliate-link"
   */
  constructor(controller) {
    this.controller = controller
  }

  /** Lấy toàn bộ dữ liệu */
  getAll() {
    return api.get(`/${this.controller}`)
  }

  /** Lấy theo id */
  getById(id) {
    return api.get(`/${this.controller}/${id}`)
  }

  /** Phân trang (POST để truyền payload) */
  paging(payload) {
    return api.post(`/${this.controller}/paging`, payload)
  }

  /** Thêm mới */
  create(body) {
    return api.post(`/${this.controller}`, body)
  }

  /** Cập nhật */
  update(id, body) {
    return api.put(`/${this.controller}/${id}`, body)
  }

  /** Xóa */
  delete(id) {
    return api.delete(`/${this.controller}/${id}`)
  }
}
