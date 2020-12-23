function remove_cart_item(id) {
    // xóa item trên giao diện
    let el_id = `#item${id}`
    $(el_id).fadeOut('slow', function (c) {
        $(el_id).remove();
    });

    // xóa item trong localStorage
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(x => x.product.id != id);
    localStorage.setItem('cart', JSON.stringify(cart));
}