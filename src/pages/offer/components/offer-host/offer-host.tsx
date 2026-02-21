
type OfferHostPropsType = {
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  description: string;
}

const AVATAR_SIZE = {
  WIDTH: '74',
  HEIGHT: '74'
};

const OfferHost = ({ host, description }: OfferHostPropsType) => (

  <div className="offer__host">
    <h2 className="offer__host-title">Meet the host</h2>
    <div className="offer__host-user user">
      <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
        <img
          className="offer__avatar user__avatar"
          src={host.avatarUrl}
          width={AVATAR_SIZE.WIDTH}
          height={AVATAR_SIZE.HEIGHT}
          alt="Host avatar"
        />
      </div>
      <span className="offer__user-name">
        {host.name}
      </span>
      {host.isPro && (
        <span className="offer__user-status">
          Pro
        </span>
      )}
    </div>
    <div className="offer__description">
      <p className="offer__text">
        {description}
      </p>
    </div>
  </div>
);


export default OfferHost;
