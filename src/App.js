import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from './Containers/HomePage/HomePage';
import AboutPage from './Containers/AboutPage/AboutPage';
import AccountOptionPage from './Containers/AccountOptionPage/AccountOptionPage';
import CartPage from './Containers/CartPage/CartPage'
import MainLayout from './Containers/MainLayout/MainLayout';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './app.css';
import ProductPage from './Containers/ProductPage/ProductPage';
import ProtectedRoute from './Components/Route/ProtectedRoute';
import RedirectProtectedRoute from './Components/Route/RedirectProtectedRoute';
import ProfilePage from './Containers/ProfilePage/ProfilePage';
import CategoryListPage from './Containers/CategoryListPage/CategoryListPage';
import CategoryProductPage from './Containers/CategoryProductPage/CategoryProductPage'
import CheckoutPage from './Containers/CheckoutPage/CheckoutPage'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetSearchQuery } from './features/search/searchSlice';
import PaymentPage from './Containers/PaymentPage/PaymentPage';
import PageNotFoundPage from './Containers/PageNotFoundPage/PageNotFoundPage';
import OrderPage from './Containers/OrderPage/OrderPage';
import WishlistPage from './Containers/WishlistPage/WishlistPage'

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const searchState = useSelector(state => state.search)

  // listen for route change
  useEffect(() => { 
    // hide search
    if(searchState.search !== '' || searchState.ordering !== '') {
      dispatch(resetSearchQuery());
    }
  }, [dispatch, location.pathname, searchState.search, searchState.ordering]);

  return (

    <TransitionGroup>
      <CSSTransition
        timeout={250}
        classNames="fade"
        key={location.key}
      >
        <MainLayout>
          <Switch location={location}>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/account" exact>
              <ProtectedRoute   
                unprotectedComponent={AccountOptionPage}
                protectedComponent={ProfilePage}
              />
            </Route>
            <Route path="/category" exact>
              <CategoryListPage />
            </Route>
            <Route path="/category/:slug" exact>
              <CategoryProductPage />
            </Route>
            <Route path="/product/:id" exact>
              <ProductPage />
            </Route>
            <Route path="/cart" exact>
              <CartPage />
            </Route>            
            <Route path="/cart/checkout" exact>
              <RedirectProtectedRoute 
                redirect="/"
                component={CheckoutPage}
              />
            </Route>
            <Route path="/cart/payment" exact>
              <RedirectProtectedRoute 
                redirect="/"
                component={PaymentPage}
              />
            </Route>
            <Route path="/order" exact>
              <OrderPage />
            </Route>
            <Route path="/wishlist" exact>
              <WishlistPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route>
              <PageNotFoundPage />
            </Route>
          </Switch>
        </MainLayout>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
