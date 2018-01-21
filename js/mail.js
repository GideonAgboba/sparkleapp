$("#contact-form").submit(function(e)){
		var firstname = document.getElementById("firstname"),
		var lastname = document.getElementById("lastname"),
		var email = document.getElementById("email"),
		var number = document.getElementById("number"),
		var quantity = document.getElementById("quantity"),
		var item = document.getElementById("item"),
		var items = document.getElementById("items"),
		var address = document.getElementById("address"),
		var bio = document.getElementById("bio");

		if(!firstname.value || !lastname.value || !email.value || !number.value || !quantity.value || !item.value || !items.value || !address.value || !bio.value ){
			alertify.error("Please check your entries "); 
		}else{
			$.ajax({
				url: "https://formspree.io/agbobakehinde@gmail.com",
				method: "POST",
				data: $(this).serialize(),
				dataType: "json"
			});
			e.preventDefault()
			$(this).get(0).reset() 
			alertify.success("Order placed successfully")
		}
	}