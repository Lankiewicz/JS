// 1. Tworzenie funkcji konstruującej Button, tworząca nowe przyciski:
function Button() {
this.text = text || 'Hello';
}
// 2. LINIA 3: Uzupełnienie konstruktora o parametr text, za pomocą którego ustawimy początkową wartość dla "text" w nowych obiektach.
// 3. LINIA 3: Możliwość tworzenia obiektu bez podania argumentu. W tym przypadku domyślną wartością właściwości "text" przycisków będzie "Hello"

// 4. Za pomocą jQuery robimy "prototyp". W tym celu robimy metodę create tworząc przycisk na stronie:
Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button');
		this.$element.text(this.text);
		this.$element.click(function(){
			alert(self.text);
		$('body').append(this.$element);
		})
	}
}
// 5. konstrukcja this.$element ma za zadanie trzymać w właściwości element przycisk (element DOM), który stworzony został przez jQuery
// 6. Za pomocą metody "text" możliwe jest ustawienie tekstu na przycisku. LINIA 12
// 7. LINIA 13. Metoda, któa po klieknięciu w przycisk wyświetli tekst na ekranie.

/* 8. SELF -> w momencie kiedy funkcja jest parametrem innej funkcji:
this.$element.click(function(){ - ta funkcja jest parametrem tej funkcji:
create: function() {
	-następuje utrata kontekstu dlatego musimy wskazać ten kontekst za pomocą zmiennej "self".
	-ustawiamy zmienną "self" na samej górze metody create
*/
// 9. LINIA 16: umieszczamy element w drzewie DOM

var btn1 = new Button('Hello!');
// 10. Pierwsza instancja
btn1.create();
// 11. Wywoływamy metodę create.
