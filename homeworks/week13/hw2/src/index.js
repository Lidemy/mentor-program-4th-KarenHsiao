
import {getComments, getNewComments} from './api.js'
import {escapeOutput, appendComments} from './utils.js'
import { getform, cssTemplate, loadMoreButton} from './template.js'
import $ from 'jquery'


export function init(options){
	let site_key = ''
	let apiURL = ''
	let containerSelector = null
	let loadMoreClassName
	let commentsClassName
	let commentsSelector
	let formClassName
	let formSelector
	site_key = options.site_key
	formClassName = `${site_key}_add_form`
	formSelector = `.`+formClassName
	loadMoreClassName = `${site_key}_btn_more`
	commentsClassName = `${site_key}_comment`
	commentsSelector = `.`+commentsClassName
	
	apiURL = options.apiURL
	containerSelector = $(options.containerSelector)
	containerSelector.append(getform(formClassName,commentsClassName ))
	const url = `${apiURL}/api_comments.php?site_key=${site_key}`
	const styleElement = document.createElement('style') // 動態新增 css style
	styleElement.type = 'text/css'
	styleElement.appendChild(document.createTextNode(cssTemplate))
	document.head.appendChild(styleElement)
	const commentDOM = $(commentsSelector);

	getComments(url).done(function(data) {
		if(!data.ok){
			alert(data.message)
			return
		}
		const comments = data.discussions;
		if(comments.length>5){
			for(let i=0; i<5; i++){
				appendComments(commentDOM,comments[i])
			}
		const loadMoreButtonHTML = loadMoreButton(loadMoreClassName)
		$(containerSelector).append(loadMoreButtonHTML)
		} else {
			for(let comment of comments) {
			    appendComments(commentDOM,comment)
			}
		}
	})

	$(formSelector).submit((e)=>{
		const nickNameDOM = $(`${formSelector} input[name=nickname]`)
		const contentDOM = $(`${formSelector} textarea[name=content]`)
		const newCommentData = {
			'site_key': site_key,
			'nickname': escapeOutput(nickNameDOM.val()),
			'content': escapeOutput(contentDOM.val())
	    }
		e.preventDefault();
		getNewComments(apiURL, newCommentData, data =>{
			if(!data.ok){
	  			alert(data.message)
	  			return
	  		}
	  		nickNameDOM.val('')
			contentDOM.val('')
	  		appendComments(commentDOM, newCommentData, true)
	  		const total_comments = data.total_comments
	  		if(total_comments>5){		//每新增一筆就判斷總留言數是否大於五筆留言，是的話就刪除最後一筆
	  			$(`${commentsSelector} .card`).last().remove()	//last()，找最後一個元素
	  		}
		})
	})
	const limit= 5
	let offset = 5

	$(containerSelector).on('click', '.' + loadMoreClassName, function(){		
	//注意: 需用事件代理方式取代在 btn_more 上做監聽，因為 response還沒回來，btn 是在 response 回來後加上的，response 還沒回來時，無法直接在還未 append 的 btn 上監聽
		const urlLimit = `${apiURL}/api_comments.php?site_key=${site_key}&limit=${limit}&offset=${offset}`
		getComments(urlLimit).done(function(data) {
			if(!data.ok){
		    	alert(data.message)
			  	return
			}
			let comments = data.discussions
			for(let i = 0; i<limit; i++){
			    if(comments[i] == undefined){
			   	    $('.'+ loadMoreClassName).hide()
			   	    break
			    }
			  	appendComments(commentDOM,comments[i])
			} 
			offset += 5
		})	
    })
}

