var $addButton, $input, $list;

var main = function() {
    prepareDOMElements();
    prepareDOMEvents();
}

var createListElement = function(title) { // => createListElement('Maciej')   => return <li>Maciej</li>
    var $li = document.createElement('li');
    // $li => <li></li>
    $li.textContent = title;
    // $li => <li>title</li>

    var $span = document.createElement('span');
    $span.className = 'close';
    $span.textContent = 'x';

    $li.append($span);

    return $li;
};

var addTodo = function() {
    if($input.value.trim() !== ''){
        $list.append(createListElement($input.value));
        $input.value = '';
    }
	var listNumber =$("#list").find (" li").length;
	if(listNumber > 0){
	$(".empty").css("display","none")}
};

var deleteTodo = function(nodeElement){
    nodeElement.remove();
};

var listClickHandler = function(event){
    if(event.target.className === 'close'){	
        deleteTodo(event.target.parentElement);
    } else{
		var displayClass = $(".empty").css("display");
		if(displayClass === "none"){
        event.target.className = (event.target.className === 'checked') ? '' : 'checked';
    }
	}
		var listNumber =$("#list").find("li").length;	
	if(listNumber < 1){
	$(".empty").css("display","block")}
	
};

var prepareDOMElements = function() {
    $addButton = document.getElementById('addBtn');
    $input = document.getElementById('title');
    $list = document.getElementById('list');
};

var prepareDOMEvents = function() {
    $addButton.addEventListener('click', addTodo);
    $list.addEventListener('click', listClickHandler);
};
document.addEventListener('DOMContentLoaded', main);