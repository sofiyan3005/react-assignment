import React from 'react';
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store";
import '../../styles/compareProduct.css';
import { Fab } from '@mui/material';

export default function CompareProductsModal(props) {
    const products = useSelector(selectProducts);
    const compareSelectedProducts = products.filter(product => product.compare);

    return (
        <Grid sx={{ flexGrow: 1 }} className="compare" container spacing={2}>
            <Grid item xs={12}>
                <table className="table">
                    <thead className="thead-default">
                        <tr>
                            <th />
                            {compareSelectedProducts.map(product =>
                                <th key={product.id}>
                                    {product.title}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="price">
                            <th scope="row">Price</th>
                            {compareSelectedProducts.map(product =>
                                <td key={product.id} className="text-center">{product.price}</td>
                            )}
                        </tr>
                        <tr className="colors">
                            <th scope="row">Colors</th>
                            {compareSelectedProducts.map(product =>
                                <td key={product.id}>
                                    <span>{product.color}</span>
                                </td>
                            )}
                        </tr>
                        <tr className="condition">
                            <th scope="row">Size</th>
                            {compareSelectedProducts.map(product =>
                                <td key={product.id}>
                                    {product.size.map((shoeSize) =>
                                        <Fab key={shoeSize} color="secondary" className="margin-r" size="small">
                                            <span>{shoeSize}</span>
                                        </Fab>
                                    )}
                                </td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </Grid>
        </Grid>

    )
};
