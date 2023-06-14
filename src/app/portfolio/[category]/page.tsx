import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { isEven } from "@/utils/common-utils";
import { CategoryType } from "@/types/category.type";
import { categories } from "./data";
import { notFound } from "next/navigation";

type Props = {
  params: {
    category: string;
  };
};

const getData = (catName: CategoryType) => {
  const data = categories[catName];

  return data ? data : notFound();
};

const Category = ({ params: { category } }: Props) => {
  const data = getData(category as CategoryType);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      {data.map((category, index) => {
        const { id, title, description, imageUrl, navigateUrl } = category;
        const isEvenIndex = isEven(index);
        return (
          <div key={id} className={styles.item}>
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{description}</p>
              <Button text="See More" url={navigateUrl} />
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.img}
                fill={true}
                src={imageUrl}
                alt="Caterory"
              />
            </div>
          </div>
        );
      })}

      {/* <div className={`${styles.item} ${styles.reverse}`}className={`${styles.item} ${styles.reverse}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            in quidem aut possimus temporibus nemo dicta, asperiores sequi.
            Tenetur maiores aliquid ullam magni vero cupiditate quasi sapiente.
            Accusamus inventore nam saepe voluptates pariatur ea? Totam impedit
            error facilis quis, velit incidunt iste veniam. Possimus natus magni
            ducimus, repellat magnam reprehenderit?
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/17151918/pexels-photo-17151918/free-photo-of-coach-on-the-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Caterory"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Category;
