import { useRouter } from "@tanstack/react-router";

export function useNavigation() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const navigate = (path: string) => {
    router.navigate({ to: path });
  };

  return { currentPath, isActive, navigate };
}
