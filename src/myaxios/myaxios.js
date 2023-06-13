//  自定义axios实例
import axios from "axios"
  const instance=axios.create({
      baseURL:"https://autumnfish.cn/"
  })
  export default instance;