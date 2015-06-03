/**
 * Created by Emre Köse on 04.06.2015.
 */
$(function(){
	var $search = $('#search');
	$search.autocomplete({
		source : 'api.php',
		autoFocus : true
	})
});
