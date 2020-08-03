## 什麼是 DOM？
Document Object Model
將 HTML 裡面的標籤轉為樹狀架構的 Object，轉為 Object 可以讓 JS 和 HTMＬ 之間有橋梁，使 JS 可以選取到特定部分做應用。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
由上層到下層傳遞，直到抵達目標後再由目標往上層傳遞，由上到下的傳遞就是捕獲，達到目標後再返回往上層傳遞是冒泡，因此一個未被阻擋的事件傳遞所經過的每一層都會有兩個階段，分別為捕獲和冒泡，而順序是先捕獲再冒泡。

當加上監聽事件時，`eventListener`的第三個參數可以決定這個監聽是要放在捕獲還是冒泡時做監聽，true 為捕獲階段，false 和預設為冒泡階段。

要注意的是在 target 上監聽不管用 `true`或`false`，`e.eventPhase` 都會是 `AT_TARGET`，target 本身只有一種階段 AT_TARGET，因此同時放兩個不同階段的監聽在 target 時會依照程式碼先後順序做執行，所以當事件傳到 target 本身時，沒有分捕獲跟冒泡。

![](https://i.imgur.com/IplwYFq.png?1)

## 什麼是 event delegation，為什麼我們需要它？
事件代理。
當我們有超級多元素需要加事件監聽時，都需要每個元素加上嗎?那這樣不就有超級多個事件監聽 !
我們可以用事件傳遞的概念使用事件代理 (Delegation)，透過父節點來處理子節點的事件，就叫做事件代理。

舉例在一個 ul 底下有超多的 li，用事件代理的概念就不需在每個 li 上加 listener，只要在 ul 上掛一個 listener 就好，因為點擊任何 li 都會傳到 ul上。

好處是當新增或刪除一個 li 時，不用去處理上面的 listener，因為你的 listener 是放在 ul 身上
## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
`.preventDefault` 是阻止瀏覽器的預設行為發生，和 DOM 事件傳遞完全無關係，加了之後事件還是會繼續傳遞下去。

另外在該層使用 `.preventDefault` 後的效果會跟這事件傳遞下去，例如在一個節點上阻止超連結發生，在這個節點底下的所有子節點的超連結也同樣會被阻止。
`.preventDefault` 可以用在檢查表單若不符合規範則阻止送出表單。

`.stopPropagation` 是讓事件不再繼續傳遞下去，加在哪一層就從這層斷掉，監聽事件的第三個布林值參數也可以使用，選擇是要在捕獲還是冒泡階段做斷點不再傳遞。



