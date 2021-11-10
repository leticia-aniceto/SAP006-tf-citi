import React from 'react';
import './cardTicker.css'
import { Icon } from '@iconify/react';

function CardTicker() {
  return (
    <>
      <section className="card-ticker">
        <div className="card-name">
        <strong>ABNB</strong> <br />
          Airbnb
        </div>

        <div className="card-data">
          <p>
            <strong>Valor de abertura</strong> <br />
            $200
          </p>
          <p>
          <strong>Valor atual</strong> <br />
            $202
          </p>
          <Icon icon="uil:arrow-growth" color="#41C19F" className="growth" />
        </div>

      </section>
      <section className="card-ticker">
        <div className="card-name">
          <strong>MRNA</strong> <br />
          Moderna
        </div>

        <div className="card-data">
          <p>
            <strong>Valor de abertura</strong> <br />
            $202
          </p>
          <p>
          <strong>Valor atual</strong> <br />
            $200
          </p>
          <Icon icon="uil:arrow-growth" color="#EF2B49" className="down" />
        </div>
      </section>
    </>
  );
};

export default CardTicker;