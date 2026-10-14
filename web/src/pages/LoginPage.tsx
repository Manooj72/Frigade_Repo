import { UserAuthForm } from "@/components/auth/AuthForm";
import Logo from "@/components/Logo";
import { ThemeProvider } from "@/context/theme-provider";
import "@/utils/i18n";
import { LanguageProvider } from "@/context/language-provider";

function LoginPage() {
  return (
    <ThemeProvider
      defaultTheme="system"
      defaultColorScheme="theme-orange"
      storageKey="frigate-ui-theme"
    >
      <LanguageProvider>
        <div className="flex size-full items-center justify-center overflow-y-auto bg-background p-6">
          <div className="flex w-full max-w-[400px] flex-col gap-[18px] rounded-lg border border-border bg-card p-9 text-card-foreground">
            <div className="mb-2 flex items-center gap-3">
              <Logo className="size-11 text-selected" />
            </div>
            <UserAuthForm />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default LoginPage;
