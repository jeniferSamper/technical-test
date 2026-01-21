"use client"

import styles from "./SearchInput.module.css"

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Search product..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  )
}
