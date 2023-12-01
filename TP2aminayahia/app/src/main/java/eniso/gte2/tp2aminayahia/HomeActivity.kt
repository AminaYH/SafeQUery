package eniso.gte2.tp2aminayahia

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import androidx.activity.ComponentActivity

class HomeActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)
        val goToConversionTemperatureButton: Button = findViewById(R.id.buttonToTemperature)
        val goToConversionMoneyButton: Button = findViewById(R.id.buttonToCurrency)

        goToConversionTemperatureButton.setOnClickListener {
            val intent = Intent(this, TemperatureActivity::class.java)
            startActivity(intent)
    }
        goToConversionMoneyButton.setOnClickListener {
            val intent = Intent(this, CurrencyActivity::class.java)
            startActivity(intent)
    }
}
}