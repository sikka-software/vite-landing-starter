import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function TopBar() {
  return (
    <nav className="bg-background border-b">
      <div className="p-4 py-0">
        <div className="flex justify-between items-center p-4 px-0">
          <div>Logo</div>
          
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
