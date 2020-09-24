export const cssTemplate = '.card{margin-bottom: 15px;}.btn{margin-bottom: 12px;}'

export function loadMoreButton(prefix) {
  return `<button type="button" class="btn btn-primary ${prefix}">更多</button>`
}
export function getform(className, commentsClassName) {
  return `<form class="${className}">
    <div class="form-group">
      <label>暱稱</label>
      <input name="nickname" type="text" class="form-control ${className}">
    </div>
    <div class="form-group">
      <label >留言內容</label>
      <textarea  name="content" class="form-control ${className}" rows="4"></textarea> 
    </div>
    <button type="submit" class="btn btn-primary">送出</button>
  </form>
  <div class="${commentsClassName}">
  </div>`
}
