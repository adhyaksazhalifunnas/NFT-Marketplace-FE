import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Form.module.css";
import { Button } from "../../components/componentsindex.js";

const Form = () => {
    return (
        <div className={Style.Form}>
            <div className={Style.Form_box}>
                <form>
                    <div className={Style.Form_box_input}>
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            className={Style.Form_box_input_userName}
                        />
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                            <input type="text" placeholder="Email" />
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="6"
                            placeholder="Describe yourself"
                        ></textarea>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="website">Website</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>

                            <input type="text" placeholder="website" />
                        </div>
                    </div>

                    <div className={Style.Form_box_input_social}>
                        <div className={Style.Form_box_input}>
                            <label htmlFor="facebook">Facebook</label>
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialFacebook />
                                </div>
                                <input type="text" placeholder="facebook.com/..." />
                            </div>
                        </div>
                        <div className={Style.Form_box_input}>
                            <label htmlFor="Twitter">Twitter</label>
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialTwitter />
                                </div>
                                <input type="text" placeholder="twitter.com/..." />
                            </div>
                        </div>
                        <div className={Style.Form_box_input}>
                            <label htmlFor="Instragram">Instragram</label>
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialInstagram />
                                </div>
                                <input type="text" placeholder="instagram.com/..." />
                            </div>
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="wallet">Wallet address</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input
                                type="text"
                                placeholder="0xcd47839436E853547353D3a87b33917420CEe438"
                            />
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineContentCopy />
                            </div>
                        </div>
                    </div>

                    <div className={Style.Form_box_btn}>
                        <Button
                            btnName="Upload profile"
                            handleClick={() => { }}
                            classStyle={Style.button}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;