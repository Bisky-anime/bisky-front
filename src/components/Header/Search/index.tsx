"use client"

import Link from "next/link"

import { SearchIcon } from "@/Icons"
import IconButton from "@/components/Common/IconButton"
import Input from "@/components/Common/Input"
import AppImage from "@/components/Common/AppImage"
import Divider from "@/components/Common/Divider"
import Title from "@/components/Common/Title"
import { getYear, prettyKind } from "@/utils"

import styles from "./index.module.scss"
import useSearch from "./index.use"

const Search = () => {
  const { inputValue, setInputValue, searchResult, inputRef } = useSearch()

  return (
    <div className={styles.search}>
      <Input
        variant="dark"
        right={<IconButton icon={<SearchIcon />} />}
        type="text"
        placeholder="Поиск"
        inputMode="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue !== "" &&
        (searchResult.length === 0 ? (
          <div className={styles.searchResult} ref={inputRef}>
            <span className={styles.searchResult__item}>Ничего не найдено</span>
          </div>
        ) : (
          <div className={styles.searchResult} ref={inputRef}>
            {searchResult.map((item, index) => (
              <>
                <Link
                  href={`/anime/${item.id}`}
                  key={item.id}
                  className={styles.searchResult__item}
                  onClick={(e) => setInputValue("")}
                >
                  <AppImage
                    src={item.id?.toString()!}
                    width={60}
                    height={84}
                    imageType="poster"
                  />
                  <div className={styles.searchResult__item__labels}>
                    <div>
                      <Title order={4}>{item.labels[0]}</Title>
                      <span
                        className={styles.searchResult__item__labels_subtitle}
                      >
                        {item.labels[1]}
                      </span>
                    </div>
                    <span>
                      {getYear(item.dates.airedOn)} / {prettyKind(item.kind)}
                    </span>
                  </div>
                </Link>
                {index !== searchResult.length - 1 && (
                  <Divider key={index} color="bisky" />
                )}
              </>
            ))}
          </div>
        ))}
    </div>
  )
}

export default Search
