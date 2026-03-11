import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <ModeToggle />
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </div>
  );
}
