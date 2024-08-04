import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Modal from "./UI/Modal";
import styles from "./Header.module.css";
import Container from "./UI/Container";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../Contexts/CartProvider";

function Header() {
  const { cart } = useCart();
  const [isModalOpen, setisModalOpen] = useState(false);
  function closeModal() {
    setisModalOpen(false);
  }
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [isModalOpen]);

  const totalQty = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <nav className={styles.nav}>
          <h1 className="text-2xl font-semibold cursor-pointer">ARC Shop</h1>
          <button
            onClick={() => {
              setisModalOpen(true);
            }}
            className={styles.showCartBtn}
          >
            <span className={styles.cartIconAndNumber}>
              <FaShoppingCart />
              {totalQty != 0 && (
                <span className={styles.number}>{totalQty}</span>
              )}
            </span>
            <span className="font-semibold text-xl">Cart</span>
          </button>
        </nav>

        {isModalOpen && (
          <Modal closeModal={closeModal}>
            <Cart />
          </Modal>
        )}
      </Container>
    </header>
  );
}

export default Header;
