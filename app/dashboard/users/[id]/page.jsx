import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Daniel Oganga
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Daniel" />
          <label>Email</label>
          <input type="email" name="email" placeholder="daniel@gmail.com" />
          <label>Password</label>
          <input type="password" name="passsword" placeholder="******" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="0797233957" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="mombasa" />
          <label>is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}> Yes</option>
            <option value={false}> No</option>
          </select>
          <label>is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}> Yes</option>
            <option value={false}> No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
