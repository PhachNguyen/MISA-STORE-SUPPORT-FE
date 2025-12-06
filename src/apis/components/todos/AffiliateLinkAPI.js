import BaseAPI from '@/apis/base/BaseAPI'
import api from '@/apis/config/APIConfig'

// API dành riêng cho AffiliateLink

class AffiliateLinkAPI extends BaseAPI {
  constructor() {
    super('AffiliateLink')
  }

  /** API đặc thù: tạo link chia sẻ từ FE */
  generateLink(payload) {
    return api.post(`/${this.controller}`, payload)
  }

  /** API đặc thù: sao chép link */
  copyLink(id) {
    return api.get(`/${this.controller}/copy/${id}`)
  }
}

export default new AffiliateLinkAPI()
