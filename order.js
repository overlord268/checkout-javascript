var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://api.bigcommerce.com/stores/pws64z157z/v2/orders/101", true);
xhttp.setRequestHeader('Content-type', 'application/json');
xhttp.setRequestHeader('Accept', 'application/json');
xhttp.setRequestHeader('X-Auth-Token', 'cdgsidjysrjs5rg2nlbycvhxmga7h4r');
xhttp.setRequestHeader('X-Auth-Client', 'fkk20rwjs6sfqefxatjojhqwvwpnauz');
xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
xhttp.setRequestHeader('Access-Control-Allow-Origin-Credentials', true);
xhttp.withCredentials = true;
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      // Response
      var response = this.responseText;
      console.log(response);
   }
};
xhttp.send();