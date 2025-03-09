import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Img from '../Common/img/Img';
import { star } from '../../assets/images';
import Word from '../Common/Word/Word';
import { C, F } from '../../assets/constant/ColorsAndFont';
import { fS } from '../../assets/constant/FontSize';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../../redux/actions/cardActions';

const MenuComp = () => {
  const products = useSelector(state => state.products.products);  
  const cartItems = useSelector(state => state.cart.cartItems); 
  const dispatch = useDispatch();
  const handleIncrease = (id, product) => {
    const productInCart = cartItems.find(item => item.id === id);
    if (productInCart) {
      dispatch(updateQuantity(id, productInCart.quantity + 1));
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleDecrease = (id) => {
    const productInCart = cartItems.find(item => item.id === id);
    if (productInCart && productInCart.quantity > 1) {
      dispatch(updateQuantity(id, productInCart.quantity - 1));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); 
  };

  return (
    <View>
      {products?.map((item) => {
        const productQuantity = cartItems.find(itemInCart => itemInCart.id === item.id)?.quantity || 0;

        return (
          <View style={styles.container} key={item.id}>
            <View style={styles.allign}>
              <Img src={{ uri: item?.thumbnail }} width={180} height={180} resize={'contain'} />
              <View style={styles.textContainer}>
                <View style={styles.allignCont}>
                  <Word text={item?.brand} size={22} font={F.f3} color={'black'} />
                  <View style={styles.reviewBtn}>
                    <Img src={star} width={20} height={20} resize={'contain'} />
                    <Word text={item?.rating} size={14} font={F.f2} color={'black'} />
                  </View>
                </View>

                <View style={styles.allignCont}>
                  <Word text={`₹ ${item?.price}`} size={22} font={F.f3} color={'black'} />
                  {productQuantity === 0 ? (
                    <TouchableOpacity style={styles.addBtn} onPress={() => handleIncrease(item.id, item)}>
                      <Word text={'+ Add'} font={F.f2} color={'white'} size={20} tc={'center'} />
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity style={styles.quantityButton} onPress={() => handleDecrease(item.id)}>
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{productQuantity}</Text>
                      <TouchableOpacity style={styles.quantityButton} onPress={() => handleIncrease(item.id, item)}>
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                <Word text={item?.warrantyInformation} size={14} font={F.f2} color={C.Gray} tc={'right'} />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: fS(10),
    borderRadius: fS(20),
    backgroundColor: '#F2E5BF',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.24,
    elevation: 5,
    padding: fS(10),
    marginTop: fS(20),
  },
  addBtn: {
    width: fS(120),
    height: fS(50),
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: fS(30),
  },
  reviewBtn: {
    width: fS(70),
    height: fS(35),
    borderWidth: 1,
    borderColor: '#FFB433',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: fS(10),
    borderRadius: fS(20),
    backgroundColor: '#FEEE91',
  },
  allign: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: fS(15),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  allignCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: fS(10),
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: fS(120),
  },
  quantityButton: {
    backgroundColor: 'black',
    borderRadius: fS(15),
    width: fS(30),
    height: fS(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: 'white',
    fontSize: fS(20),
  },
  quantityText: {
    fontSize: fS(20),
    fontWeight: 'bold',
    color: 'black',
    width: fS(40),
    textAlign: 'center',
  },
});

export default MenuComp;
