$(document).ready(function(){
    
    var quantitiy=0;
       $('.quantity-right-plus').click(function(e){
            
            // Deja de funcionar como un boton
            e.preventDefault();
            // Toma el id del campo
            var quantity = parseInt($('#quantity').val());
            
            // Incrementar
                $('#quantity').val(quantity + 1);
            
        });
    
         $('.quantity-left-minus').click(function(e){
            
            e.preventDefault();
        
            var quantity = parseInt($('#quantity').val());
            
        
          
                // Disminuir
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });
    });
