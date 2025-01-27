import React, { useState } from "react";
import { emphasize, styled } from "@mui/material";
import { Breadcrumbs, Chip } from "@mui/material";
import { MdHome } from "react-icons/md";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";
import pro01 from "../../assets/images/pro01.png";
import { IoCloseSharp } from "react-icons/io5";
// import OutlinedInput from "@mui/material/OutlinedInput";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {FaRegImages} from "react-icons/fa";

// breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        }
    };
});

const ProductUpload = () => {

    const [categoryValue, setCategoryValue] = useState('');
    const [subCategoryValue, setSubCategoryValue] = useState('');
    const [featuredValue, setFeaturedValue] = useState('');
    const [productRams, setProductRams] = useState([]);

    const [ratingValue, setRatingValue] = useState(2);

    const handleChangecategory = (event) => {
        setCategoryValue(event.target.value);
    };

    const handleChangeSubCategory = (event) => {
        setSubCategoryValue(event.target.value);
    };

    const handleChangefeaturedValue = (event) => {
        setFeaturedValue(event.target.value);
    };

    const handleChangeProductRams = (event) => {
        const {
            target: {value},
        } = event;
        setProductRams
        (typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            <div className="right-content w-100">
                <div className="card shadow border-0 w-100 flex-row p-4 res-col">
                    <h5 className="mb-0">Product Upload</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<MdHome fontSize="small" />}
                        />
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Products"
                        />
                        <StyledBreadcrumb
                            label="Product Upload"
                        />
                    </Breadcrumbs>
                </div>

                <form className="form">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card p-4">
                                <h5 className="mb-4">Basic Information</h5>
                                <div className="form-group">
                                    <h6>TITLE</h6>
                                    <input type="text" placeholder="type here" />
                                </div>
                                <div className="form-group">
                                    <h6>DESCRIPTION</h6>
                                    <textarea placeholder="type here..." rows={10} cols={10} />
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>CATEGORY</h6>
                                            <Select
                                                value={categoryValue}
                                                onChange={handleChangecategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className="w-100"
                                            >
                                                <MenuItem value="">
                                                    <em value={null}>None</em>
                                                </MenuItem>
                                                <MenuItem className="text-capitalize" value="Men">Men</MenuItem>
                                                <MenuItem className="text-capitalize" value="Women">Women</MenuItem>
                                                <MenuItem className="text-capitalize" value="Kids">Kids</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>SUB CATEGORY</h6>
                                            <Select
                                                value={subCategoryValue}
                                                onChange={handleChangeSubCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className="w-100"
                                            >
                                                <MenuItem value="">
                                                    <em value={null}>None</em>
                                                </MenuItem>
                                                <MenuItem className="text-capitalize" value="Jeans">Jeans</MenuItem>
                                                <MenuItem className="text-capitalize" value="Shirts">Shirts</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>PRICE </h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>OLD PRICE </h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>IS FEATURED</h6>
                                            <Select
                                                value={featuredValue}
                                                onChange={handleChangefeaturedValue}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className="w-100"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={'true'}>True</MenuItem>
                                                <MenuItem value={'false'}>False</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>PRODUCT STOCK </h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>BRAND</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>DISCOUNT</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>PRODUCT RAMS</h6>
                                            <Select
                                                multiple
                                                value={productRams}
                                                onChange={handleChangeProductRams}
                                                displayEmpty
                                                className="w-100"
                                                // MenuProps={MenuProps}
                                            >
                                                <MenuItem value="4GB">4GB</MenuItem>
                                                <MenuItem value="8GB">8GB</MenuItem>
                                                <MenuItem value="10GB">10GB</MenuItem>
                                                <MenuItem value="12GB">12GB</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>RATINGS</h6>
                                            <Rating
                                                name="simple-controlled"
                                                id="rat"
                                                value={ratingValue}
                                                onChange={(event, newValue) => {
                                                    setRatingValue(newValue);  
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="card p-4 mt-0">
                                <div className="images-upload-section">
                                    <h5 className="mb-4">Media And Published</h5>
                                    <div className="img-upload-box d-flex align-items-center">
                                        <div className="upload-box">
                                            <span className="remove"><IoCloseSharp /></span>
                                            <div className="box">
                                                <LazyLoadImage 
                                                    alt={"images"}
                                                    effect="blur"
                                                    className="w-100"
                                                    src={pro01}
                                                />
                                            </div>
                                        </div>
                                        <div className="upload-box">
                                            <input type="file" multiple="" name="images"  />
                                            <div className="info">
                                                <span><FaRegImages /> </span>
                                                <h5>image upload</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button className="btn-blue btn-big btn-lg w-100 mb-4 mt-4"><FaCloudUploadAlt /> &nbsp; PUBLISH AND VIEW</Button>
                            </div>
 
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default ProductUpload;

