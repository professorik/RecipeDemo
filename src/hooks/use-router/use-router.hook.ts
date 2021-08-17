import { useMemo } from "../../hooks/hooks";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

const useRouter = <P = {}>() => {
  const params = useParams<P>();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(
    () => ({
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      params,
      match,
      location,
      history,
    }),
    [params, match, location, history],
  );
};

export { useRouter };
