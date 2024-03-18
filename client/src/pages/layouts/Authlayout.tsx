import { Outlet } from "react-router-dom";
import FullScreenCard from "../../components/FullScreenCard";

export function AuthLayout() {
  return (
    <FullScreenCard>
      <FullScreenCard.Body>
        <Outlet />
      </FullScreenCard.Body>
      <FullScreenCard.BelowBody>hi</FullScreenCard.BelowBody>
    </FullScreenCard>
  );
}
