import {render} from '@testing-library/react'
import Header from "../component/Header";
import {StaticRouter} from "react-router-dom/server";
import {Provider} from "react-redux";
import store from "../store";
import '@testing-library/jest-dom'

describe('Header test', () => {
    it('should render header component', () => {
        const heading = render(
            <StaticRouter>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </StaticRouter>
        )

        expect(heading.queryByTestId('logo')).toBeInTheDocument()
        expect(heading.getByTestId('logo').src).toBe('http://localhost/dummy.png')

        expect(heading.queryByTestId('home')).toBeInTheDocument()
        expect(heading.queryByTestId('about')).toBeInTheDocument()
        expect(heading.queryByTestId('new-arrivals')).toBeInTheDocument()
        expect(heading.queryByTestId('offers')).toBeInTheDocument()
        expect(heading.queryByTestId('discounts')).toBeInTheDocument()

        expect(heading.queryByText('✅')).toBeInTheDocument()

        expect(heading.queryByTestId('cart-data').innerHTML).toBe("0")
        expect(heading.queryByTestId('cart-img')).toBeInTheDocument()
        expect(heading.getByTestId('cart-img').src).toBe('http://localhost/dummy.png')

        expect(heading.queryByTestId('logout-btn')).toBeInTheDocument()
    });
});
