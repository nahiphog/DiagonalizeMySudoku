"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const puzzleTypes = [
  ["Diagonal", "Both marked diagonals", "Normal sudoku rules apply. Additionally, each marked diagonal must contain each of the digits from 1 to 9."],
  ["Antidiagonal", "Three distinct digits", "Normal sudoku rules apply. Additionally, each marked diagonal must contain 3 distinct digits."],
  ["One-of-each", "One full, one distinct", "Normal sudoku rules apply. Additionally, one diagonal must contain each of the digits from 1 to 9, another diagonal must contain 3 distinct digits. It is up to the user to determine which diagonal is which."],
  ["Bent Diagonals", "Four turning paths", "Normal sudoku rules apply. Each of the four bent diagonals must contain the digits 1-9."],
  ["Double Diagonals", "Four straight lines", "Normal sudoku rules apply. Also, digits may not repeat along any of the four straight diagonal lines."],
  ["Triple Diagonals", "No repeated digits", "Normal sudoku rules apply. Digits must not repeat along any marked diagonal."],
  ["Queen sudoku", "9s cannot see each other", "Normal sudoku rules apply. Also, 9s cannot see each other along a diagonal."],
] as const;
const variantActions = ["Generate", "Custom build", "Simulation", "Import a grid", "Verify a puzzle"];

export default function Home() {
  const [puzzleType, setPuzzleType] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  return <main className={`studio-shell ${darkMode ? "is-dark" : ""}`}>
    <header className="topbar"><div className="brand">Diagonalize my Sudoku</div><div className="header-actions"><button aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} className="theme-toggle" onClick={() => setDarkMode((current) => !current)} type="button">{darkMode ? <Sun size={18} strokeWidth={1.8} /> : <Moon size={18} strokeWidth={1.8} />}</button></div></header>
    <section className="workbench">
      <aside className="left-rail variant-dashboard"><Select value={String(puzzleType)} onValueChange={(value) => setPuzzleType(Number(value))}><SelectTrigger className="variant-select" aria-label="Puzzle variant"><span>{puzzleTypes[puzzleType][0]}</span></SelectTrigger><SelectContent className={`variant-menu ${darkMode ? "variant-menu-dark" : ""}`}>{puzzleTypes.map(([name, , description], index) => <SelectItem className={`variant-menu-item ${index === puzzleType ? "has-description" : ""}`} key={name} textValue={name} value={String(index)}><span className="variant-option"><span className="variant-option-title">{name}</span>{index === puzzleType && <span className="variant-option-description">{description}</span>}</span></SelectItem>)}</SelectContent></Select><div className="variant-action-list" aria-label={`${puzzleTypes[puzzleType][0]} puzzle actions`}>{variantActions.map((action, index) => <Button className={`variant-action ${index === 0 ? "is-primary" : ""}`} key={action} type="button" variant="outline">{action}</Button>)}</div></aside>
      <section className="empty-workspace" aria-label="Puzzle workspace" />
    </section>
  </main>;
}
