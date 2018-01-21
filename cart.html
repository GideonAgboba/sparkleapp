<?php
	session_start();
	require 'connect.php';
	require 'items.php';
	if(isset($_POST["id"])){
		$result = mysqli_query($con, "select * from product where id=" .$POST["id"]);
		$product = mysqli_fetch_object($result);
		$items = new items();
		$items->id = $product ->id;
		$items->name = $product->name;
		$items->price = $product->price;
		$items->quantity = 1;

		// check product is existing in cart 
		$index = -1;
		if (isset($_SESSION["cart"])) {
			$cart = unserialize(serialize($_SESSION["cart"]));
			for ($i = 0; $i < count($cart); $i++) { 
				if ($cart[$i]->id == $_POST["id"]) {
					$index = $i;
					break;
				}
			}
			if ($index == -1) {
				$_SESSION["cart"] [] = $cart;
				}else{
					$cart[$index]->quantity++;
					$_SESSION["cart"] = $cart;
				}
			}

			// Delete product in cart
			if (isset($_POST["index"])) {
				$cart = unserialize(serialize($_SESSION["cart"]));
				unset($cart[$_POST["index"]]);
				$cart = array_values($cart);
				$_SESSION["cart"] = $cart;
			}
		}
?>
<table>
	<tr>
		<th>Option</th>
		<th>Id</th>
		<th>Name</th>
		<th>Price</th>
		<th>Quantity</th>
		<th>Sub Total</th>
	</tr>
	<?php
		$cart=unserialize(serialize($_SESSION["cart"]));
		$s=0;
		$index=0;
		for ($i=0; $i < count($cart); $i++) { 
			$s +=$cart [$i]->price * $cart [$i]->quantity;
		}
	?>
	<tr>
		<td><a href="cart.php?index=<?php echo $index; ?>" onclick="return confirm("Are you sure?")">Delete</a></td>
		<td><?php echo $cart[$i]->id; ?></td>
		<td><?php echo $cart[$i]->name; ?></td>
		<td><?php echo $cart[$i]->price; ?></td>
		<td><?php echo $cart[$i]->quantity; ?></td>
		<td><?php echo $cart[$i]->price * $cart[$i] ->quantity; ?></td>
	</tr>
	<?php
		$index++;
	?>
	<tr>
		<td colspan="5" align="right">sum</td>
		<td align="left"><?php echo $s; ?></td>
	</tr>
</table>