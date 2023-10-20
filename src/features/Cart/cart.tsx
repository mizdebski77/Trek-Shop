import { Wrapper, CartWrapper, ProductsWrapper, ProductTile, Image, OrderSection, TextWrapper, ProductTitle, ProductDescription, ProductSize, PriceWrapper, ProductPrice, ProductCount, CountButton, OrderTitle, CostsWrapper, Value, Discount, OrderContainer, Sum, NextButton, ImageWrapper, RemoveItem, } from './styledCart';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decraseCart, removeItem } from './cartSlice';
import { RootState } from '../../core/store';
import { CartItem } from '../../core/interface';
import { Information } from './Information/informations';
import { NoItemsCart } from './NoItemsCart/noItemsCart';
import AlertConfirm from 'react-alert-confirm';
import "react-alert-confirm/lib/style.css";

export const Cart = () => {

    const products = useSelector((state: RootState) => state.cart.cartItems);
    const totalAmount = useSelector((state: RootState) => state.cart.cartTotalAmount);

    const dispatch = useDispatch();

    const openAlert = (product: CartItem) => {
        AlertConfirm({
            title: "Are you sure?",
            desc: `You will delete ${product.name} from your cart`,
            onOk: () => dispatch(removeItem(product.id))
        });
    }

    return (
        <Wrapper>
            <Information />
            {products.length > 0 ? (

                <>
                    <CartWrapper>
                        <ProductsWrapper>
                            {products.map((product: CartItem) => (
                                <ProductTile>
                                    <ImageWrapper>
                                        <Image src={product.image} />
                                        <RemoveItem onClick={() => openAlert(product)} >Remove Item</RemoveItem>
                                    </ImageWrapper>
                                    <TextWrapper>
                                        <ProductTitle>
                                            {product.name}
                                        </ProductTitle>
                                        <ProductDescription>{product.description}</ProductDescription>
                                        <ProductSize>Size: M</ProductSize>
                                        <PriceWrapper>
                                            <ProductPrice>{product.price} €</ProductPrice>
                                            <ProductCount>
                                                <CountButton disabled={product.cartQuantity === 1} onClick={() => dispatch(decraseCart(product))} >-</CountButton>
                                                {product.cartQuantity}
                                                <CountButton onClick={() => dispatch(addToCart(product))}  >+</CountButton>
                                            </ProductCount>
                                        </PriceWrapper>
                                    </TextWrapper>
                                </ProductTile>
                            ))}
                        </ProductsWrapper>

                        <OrderSection>
                            <OrderTitle>Your order</OrderTitle>
                            <OrderContainer>
                                <CostsWrapper>
                                    <Value>Value of products</Value>
                                    <Value>{totalAmount.toFixed(2)} €</Value>
                                </CostsWrapper>
                                <Discount>I have a discount code</Discount>
                            </OrderContainer>
                            <OrderContainer>
                                <CostsWrapper>
                                    <Sum>Sum</Sum>
                                    <Sum>{totalAmount.toFixed(2)} €</Sum>
                                </CostsWrapper>
                            </OrderContainer>
                            <NextButton to='/LogIn'>Next</NextButton>
                        </OrderSection>
                    </CartWrapper>
                </>
            ) : <NoItemsCart />}
        </Wrapper>

    );
};

